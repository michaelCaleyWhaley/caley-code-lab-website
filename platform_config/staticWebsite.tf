# static website S3 bucket
resource "aws_s3_bucket" "caley-code-lab-website" {
  bucket = "caley-code-lab-website"

  tags = {
    Name = "code lab website bucket"
  }
}

resource "aws_s3_bucket_website_configuration" "caley-code-lab-website-config" {
  bucket = "caley-code-lab-website"

  index_document {
    suffix = "index"
  }
  error_document {
    key = "404"
  }
}

resource "aws_s3_bucket_public_access_block" "example" {
  bucket = aws_s3_bucket.caley-code-lab-website.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "allow-public-access" {
  bucket = "caley-code-lab-website"
  policy = data.aws_iam_policy_document.s3_read_permissions.json
}


data "aws_iam_policy_document" "s3_read_permissions" {
  statement {
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }
    sid    = "PublicReadGetObject"
    effect = "Allow"
    actions = [
      "s3:GetObject",
    ]
    resources = ["arn:aws:s3:::caley-code-lab-website/*"]
  }
}
