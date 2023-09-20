variable "domain" {
  default = "caleycodelab.com"
}

resource "aws_route53_zone" "main" {
  name = var.domain
}

resource "aws_route53_record" "root_domain" {
  zone_id = aws_route53_zone.main.zone_id
  name    = var.domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}


resource "aws_route53domains_registered_domain" "caley-code-lab-register-domain" {
  domain_name = "caleycodelab.com"
  auto_renew  = false

  name_server {
    name = "ns-1285.awsdns-32.org"
  }

  name_server {
    name = "ns-1620.awsdns-10.co.uk"
  }

  name_server {
    name = "ns-833.awsdns-40.net"
  }

  name_server {
    name = "ns-57.awsdns-07.com"
  }
}





