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
        sh '''nvm install 16
nvm use 16
npm install'''
      }
    }

  }
}