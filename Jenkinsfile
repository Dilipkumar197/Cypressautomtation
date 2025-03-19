pipeline {
    agent any
    
    environment {
        // Set the path to the node installation (if it's not set globally)
        NODE_HOME = tool name: 'NodeJS', type: 'NodeJSInstallation'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout your repository code
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    // Install the npm dependencies (including Cypress)
                    bat 'npm install'
                }
            }
        }
        
        stage('Run Tests') {
            steps {
                script {
                    // Run Cypress tests
                    bat 'npx cypress run'
                }
            }
        }
    }
    
    post {
        always {
            echo 'This is always executed after the build.'
        }
        success {
            echo 'Cypress tests ran successfully!'
        }
        failure {
            echo 'Cypress tests failed!'
        }
    }
}

