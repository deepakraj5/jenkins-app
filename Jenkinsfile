pipeline {

	agent any
	
	stages {
		
		stage('install the package') {
			steps {
				sh "npm i"
			}
		}
	
		
		stage('restart the pm2 server') {
			steps {
				sh "pm2 restart app"
			}
		}


	}

}
