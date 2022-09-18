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

    stage('Build') {
      steps {
        sh 'npm install --legacy-peer-deps'
      }
    }

  }
}