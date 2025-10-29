pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Unit Tests') {
      steps {
        sh 'npm test'
      }
    }

    stage('Docker Build') {
      steps {
        sh 'docker build -t docker-demo:latest .'
      }
    }
  }

  post {
    success {
      echo '✅ Build and tests passed successfully!'
    }
    failure {
      echo '❌ Pipeline failed — check logs.'
    }
  }
}
