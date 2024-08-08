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
    }
}
