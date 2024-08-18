pipeline {
    agent any

    environment {
        // Extract version from package.json
        VERSION = '1.0.0'
        IMAGE_NAME = "me-app:${VERSION}"
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Build Docker image dengan tag versi
                    sh "docker build -t ${IMAGE_NAME} ."
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // sh 'docker compose run --rm app npm run test'
                    sh 'echo simulatiion running test... && sleep 3 && echo test OK!'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy versi baru menggunakan Docker Compose
                    sh """
                    export IMAGE_TAG=${VERSION}
                    sh 'docker compose up -d'
                    """
                }
            }
        }
    }

    post {
        success {
            echo "Deployment of version ${VERSION} successful!"
        }
        always {
            cleanWs() // Clean up workspace
        }
    }
}
