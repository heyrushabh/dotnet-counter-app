resource "aws_ecr_repository" "api" {
  name = "dotnet-counter-api"

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = local.common_tags
}

resource "aws_ecr_repository" "Frontend" {
  name = "dotnet-counter-frontend"

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = local.common_tags
}