pipeline {
    agent any

    stages {
        stage('verify tooling') {
            steps {
                sh '''
            docker version
            docker info
            docker info
            docker compose version
            curl --version
                '''
            }
        }

        stage('check docker status') {
            steps {
                sh '''
            docker ps
            docker images
                '''
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh 'docker-compose run --rm app npm run test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    post {
        always {
            script {
                sh 'docker-compose down'
            }
        }
    }
}
