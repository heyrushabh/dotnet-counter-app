output "vpc_id" {
  value = aws_vpc.main.id
}

output "subnet_id" {
  value = aws_subnet.public.id
}

output "ec2_public_ip" {
  value = aws_instance.main.public_ip
}

output "ec2_public_dns" {
  value = aws_instance.main.public_dns
}

output "api_ecr_url" {
  value = aws_ecr_repository.api.repository_url
}

output "frontend_ecr_url" {
  value = aws_ecr_repository.Frontend.repository_url
}

output "elastic_ip" {
  value = aws_eip.ec2.public_ip
}