pipeline {
  agent {
    node {
      label 'WorkerNode'
    }

  }
  stages {
    stage('yarn install') {
      steps {
        sh 'yarn install'
      }
    }

  }
}