resource "aws_s3_bucket" "caley-code-lab-terraform" {
  bucket = "caley-code-lab-terraform"

  tags = {
    Name        = "caley-code-lab-terraform"
    Environment = "dev"
  }
}

terraform {
  backend "s3" {
    bucket = "caley-code-lab-terraform"
    region = "eu-west-2"
  }
}
