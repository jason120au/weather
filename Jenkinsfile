pipeline {
  agent {
    node {
      label 'WorkerNode'
    }

  }
  stages {
    stage('npm install') {
      steps {
        sh '''. ~/.nvm/nvm.sh
. ~/.profile
. ~/.bashrc'''
      }
    }

  }
}