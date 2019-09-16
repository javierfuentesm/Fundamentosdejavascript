function factorial(n) {
    //  Esto solo se ejecutará la primera vez para inicializar la cache

    if (!this.cache) {
        this.cache={}
    }
    //Comprobara si el cache si ya se calculo elf acotrial de ese numer
    if (this.cache[n]) {
        return this.cache[n]
        
    }
    //Esto es para detener la recursividad
    if (n===1) {
        return 1            
    }
    this.cache[n]= n * factorial(n-1)
    return this.cache[n]
}