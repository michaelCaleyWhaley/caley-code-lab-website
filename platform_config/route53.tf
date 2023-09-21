resource "aws_route53_zone" "main" {
  name = aws_route53domains_registered_domain.caley-code-lab-register-domain.domain_name
}

resource "aws_route53_record" "root_domain" {
  zone_id = aws_route53_zone.main.zone_id
  name    = var.domain
  type    = "A"

  alias {
    name                   = aws_s3_bucket_website_configuration.caley-code-lab-website-config.website_domain
    zone_id                = aws_s3_bucket.caley-code-lab-website.hosted_zone_id
    evaluate_target_health = false
  }
  # alias {
  #   name                   = aws_cloudfront_distribution.s3_distribution.domain_name
  #   zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
  #   evaluate_target_health = false
  # }
}

resource "aws_route53domains_registered_domain" "caley-code-lab-register-domain" {
  domain_name = "caleycodelab.com"
  auto_renew  = false
}

# SSL
resource "aws_route53_record" "acm_tf_verification" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "_10b233803c909afa904a8873f361a6eb.caleycodelab.com."
  type    = "CNAME"
  ttl     = "30"

  records = [
    "_8712a92286b7a0fec4bcd218d16d2051.vkznmzfykm.acm-validations.aws.",
  ]
}

resource "aws_route53_record" "acm_tf_verification_www" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "_1e51e35946b5abf7b2bec9eba69d13aa.www.caleycodelab.com."
  type    = "CNAME"
  ttl     = "30"

  records = [
    "_dfe06fa49455a0a108a47fbcf516a93c.vkznmzfykm.acm-validations.aws.",
  ]
}




