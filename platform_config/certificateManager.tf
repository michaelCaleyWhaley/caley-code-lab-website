provider "aws" {
  alias  = "virginia"
  region = "us-east-1"
}

resource "aws_acm_certificate" "root_cert" {
  domain_name               = "caleycodelab.com"
  subject_alternative_names = ["www.caleycodelab.com", "caleycodelab.com"]
  validation_method         = "DNS"
}


