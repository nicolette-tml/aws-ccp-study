# CloudFormation

> 📖 **CloudFormation** is a declarative way of outlining your AWS infrastructure, for any resources. Then CloudFormation creates those for you, in the right order, with the exact configurations that you specify.

## Benefits

- Infrastructure as Code (IaC)
    - Provision infrastructure using templates instead of manual setup
    - Track and review infrastructure changes through code
- Cost Management
    - Estimate costs before deployment
    - Tag stack resources for cost tracking
    - Automatically create/delete environments to reduce costs (e.g. dev environments)
- Productivity
    - Quickly create, update, or delete entire environments
    - Declarative templates (define *what* you want, not *how* to build it)
    - Automatically generate architecture diagrams from templates
- Reuse
    - Reuse existing templates and AWS sample templates
    - Consistent, repeatable deployments
- Broad AWS Support
    - Supports almost all AWS services and resources

# Infrastructure Composer

> 📖 **Infrastructure Composer** is a visual tool for designing AWS architectures by dragging and dropping resources. It can generate AWS CloudFormation templates from your architecture and also visualize existing CloudFormation templates.

# AWS Cloud Development Kit (CDK)

- Define cloud infrastructure in JavaScript/ TypeScript, Python, Java
- Turns CDK application into CloudFormation template (via CDK CLI)  
Use cases: Lambda functions, Docker containers in ECS/ EKS

# AWS Elastic Beanstalk

> 📖 **Elastic Beanstalk** is a developer centric view of deploying an application on AWS