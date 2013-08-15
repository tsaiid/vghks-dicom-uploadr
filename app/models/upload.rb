class Upload < ActiveRecord::Base
  attr_accessible :upload
  has_attached_file :upload
  validates_presence_of :upload_file_name

  include Rails.application.routes.url_helpers

  def to_jq_upload
    {
      "id" => self.id,
      "name" => read_attribute(:upload_file_name),
      "size" => read_attribute(:upload_file_size),
      "url" => ActionController::Base.helpers.path_to_image(upload.url(:original)),
      "delete_url" => upload_path(self),
      "delete_type" => "DELETE"
    }
  end

end
