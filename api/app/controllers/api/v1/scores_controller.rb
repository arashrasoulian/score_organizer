module Api
  module V1
    class ScoresController < ApplicationController
      
      def home_page_data
        new_uploaded_scores = Score.order(created_at: :desc).limit(5)

        most_popular_scores = Score.order("RANDOM()").limit(5)

        for_you_scores = Score.order("RANDOM()").limit(5)

        instruments = ["viola", "violin", "cello", "piano", "vocal"]

        render json: {
          new_uploaded_scores: new_uploaded_scores.map { |score| format_score(score, instruments) },
          most_popular_scores: most_popular_scores.map { |score| format_score(score, instruments) },
          for_you_scores: for_you_scores.map { |score| format_score(score, instruments) },
        }
      end

      def index
        @scores = current_user.scores
        render json: @scores.map { |score| score_with_urls(score) }
      end

      def show
        score = Score.find(params[:id])
        render json: score_with_urls(score)
      rescue ActiveRecord::RecordNotFound
        render json: { error: 'Score not found' }, status: 404
      end


      def create
        @score = current_user.scores.build(score_params)
        if @score.save
          render json: @score, status: :created
        else
          render json: @score.errors, status: :unprocessable_entity
        end
      end

      private

      def score_params
        params.require(:score).permit(:score_pdf, :name, :composer, :score_type, :pdf)
      end

      def score_with_urls(score)
        score.as_json.merge(
          pdf_url: score.pdf.attached? ? rails_blob_url(score.pdf) : nil,
          score_pdf: score.score_pdf,
        )
      end

      def format_score(score, instruments)
        {
          id: score.id,
          name: score.name,
          composer: score.composer,
          instrument: instruments.sample, # Picks a random instrument
        }
      end
    end
  end
end
