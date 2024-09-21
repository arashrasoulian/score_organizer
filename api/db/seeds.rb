# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
require 'yaml'

# Load score data from YAML file
scores_data = YAML.load_file(Rails.root.join('db', 'scores.yml'))['scores']

# Directory where your PDFs are stored (inside db/seeds/pdfs/)
pdf_directory = Rails.root.join('db', 'seeds', 'pdfs')

# Clear previous data
Score.destroy_all
User.destroy_all
puts "Cleared all previous records from users and scores."

# Create Users
users = [
  { email: 'tom@test.com', password: '123456' },
  { email: 'john@test.com', password: '123456' },
  { email: 'sofia@test.com', password: '123456' }
]

# Get list of PDFs from the directory
pdf_files = Dir.entries(pdf_directory).select { |f| f.end_with?('.pdf') }.sort
if pdf_files.size < 30
  raise "You need at least 30 PDFs in the seeds/pdfs directory."
end

# Seed each user with unique PDFs and corresponding score data
users.each_with_index do |user_data, user_index|
  user = User.find_or_create_by!(email: user_data[:email]) do |u|
    u.password = user_data[:password]
  end

  puts "Created user: #{user.email}"

  # Each user gets 10 unique PDFs and corresponding scores from the YAML
  user_scores = scores_data.slice(user_index * 10, 10)
  user_pdfs = pdf_files.slice(user_index * 10, 10)

  user_scores.each_with_index do |score_data, index|
    # Create a score
    score = user.scores.create!(
      name: score_data['name'],
      composer: score_data['composer'],
      score_type: 'Music Note'
    )

    # Attach the corresponding PDF to the score
    pdf_file_path = File.join(pdf_directory, user_pdfs[index])

    if File.exist?(pdf_file_path)
      score.pdf.attach(
        io: File.open(pdf_file_path),
        filename: user_pdfs[index],
        content_type: 'application/pdf'
      )
      puts "Attached PDF #{user_pdfs[index]} to score #{score.name} for user #{user.email}"
    else
      puts "PDF file not found: #{pdf_file_path}"
    end
  end
end
