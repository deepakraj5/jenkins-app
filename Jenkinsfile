pipeline {

	agent any
	
	stages {
	
		
		stage('restart the pm2 server') {
			steps {
				sh "pm2 list"
				sh "pm2 restart app"
			}
		}


	}

}
