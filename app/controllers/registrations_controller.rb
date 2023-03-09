class RegistrationsController < ApplicationController

    def index
        @registrations = Registration.all

        render json: @registrations
    end
    
    # PATCH/PUT /registrations/1
    def create 
        @registration = Registration.new(registration_params)

        if @registration.save
            render json: @registration, status: :created, location: @registration
        else
            render json: @registration.errors, status:
            :unprocessable_entity
        end

    end


    private

    def registration_params
        params.require(:registration).permit(:first_name, :last_name, :email, :how_often)
    end

end
