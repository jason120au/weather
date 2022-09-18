pipeline {
  agent {
    node {
      label 'WorkerNode'
    }

  }
  stages {
    stage('Setup Environment') {
      steps {
        sh '''. ~/.nvm/nvm.sh
. ~/.profile
. ~/.bashrc'''
      }
    }

    stage('') {
      steps {
        yarn 'build'
      }
    }

  }
  environment {
    CI = 'false'
  }
}