class Mentoring < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

    
        self.tags = "In Person", "online", "yes", "no", "one OnOne","Creative Foundation", "Video Games and Life Skills", "Facebook", "Instagram", "Word Of Mouth", "Event Invite", "Website" 
    



end
    

