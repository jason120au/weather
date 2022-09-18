pipeline {
  agent {
    node {
      label 'WorkerNode'
    }

  }
  stages {
    stage('npm install') {
      steps {
        sh 'npm install'
      }
    }

  }
}