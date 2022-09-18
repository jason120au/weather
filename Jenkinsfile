pipeline {
  agent {
    node {
      label 'WorkerNode'
    }

  }
  stages {
    stage('Install') {
      steps {
        yarn 'install'
      }
    }

    stage('Build') {
      steps {
        yarn 'build'
      }
    }

  }
  environment {
    CI = 'false'
  }
}