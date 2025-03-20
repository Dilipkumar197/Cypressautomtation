pipeline {
    agent any
    
    environment {
        NODE_HOME = tool name: 'NodeJS', type: 'NodeJSInstallation'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    options {
        timeout(time: 20, unit: 'MINUTES')
    }

    stages {
        stage('Clean') {
            steps {
                script {
                    bat 'npm cache clean --force'
                    bat 'rmdir /s /q node_modules || echo "No node_modules to delete"'
                }
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    bat 'npx cypress run --parallel'
                }
            }
        }
    }

    post {
        always {
            echo 'This is always executed after the build.'
            archiveArtifacts artifacts: 'cypress/screenshots/**/*, cypress/videos/**/*', allowEmptyArchive: true
        }
        success {
            echo 'Cypress tests ran successfully!'
        }
        failure {
            echo 'Cypress tests failed!'
        }
    }
}
