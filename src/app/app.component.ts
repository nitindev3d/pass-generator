import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = ""
  includeLetters = false
  includeNumbers = false
  includeSymbols = false
  length = 0
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }

  onChangeLength(value: string) {
    this.length = Number(value) 
  }
  onButtonClick() {
    this.password = ""
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()'
    let validChars = ""
    if(this.includeLetters) validChars += letters

    if(this.includeNumbers) validChars += numbers

    if(this.includeSymbols) validChars += symbols

    let validCharsLength = validChars.length
    
    for (let i = 0; i < this.length; i++)
      this.password += validChars[Math.floor(Math.random() * validCharsLength)]

    // console.log(this.password);
    
  }
  
}
