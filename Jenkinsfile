pipeline {
  agent {
    node {
      label 'WorkerNode'
    }

  }
  stages {
    stage('npm install') {
      steps {
        sh '''nvm install 16
nvm use 16'''
      }
    }

  }
}