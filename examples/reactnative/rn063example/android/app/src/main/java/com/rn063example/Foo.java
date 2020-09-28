package com.rn063example;

class Foo {
    public static Throwable generateException() {
        return new Exception("Oops - rejected promise from Java!");
    }
}
