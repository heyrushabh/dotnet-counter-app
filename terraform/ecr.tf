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

resource "aws_ecr_lifecycle_policy" "api" {
  repository = aws_ecr_repository.api.name

  policy = jsonencode({
    rules = [
      {
        rulePriority = 1
        description  = "keep last 3 API images"
        selection = {
          tagStatus   = "any"
          countType   = "imageCountMoreThan"
          countNumber = 3
        }
        action = {
          type = "expire"
        }
      }
    ]
  })
}
resource "aws_ecr_lifecycle_policy" "frontend" {
  repository = aws_ecr_repository.Frontend.name

  policy = jsonencode({
    rules = [
      {
        rulePriority = 1
        description  = "keep last 3 Frontend images"
        selection = {
          tagStatus   = "any"
          countType   = "imageCountMoreThan"
          countNumber = 3
        }
        action = {
          type = "expire"
        }
      }
    ]
  })
}