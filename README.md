# Vas Gergő Zoltán: Zen Island

2023/24 tavaszi félév 'Webfejlesztési keretrendszerek' nevű tárgyhoz készített projekt.

Választott téma: **Masszázs szalon időpontfoglaló webalkalmazása**

## [Deployolt oldal](https://vasgergo-webkert.web.app)


## Követelmények

- **Fordítási hiba nincs (ng serve kiadásakor nincs hiba)**
  - _Nekem nem dobott hibát_
  

- **Futtatási hiba nincs (böngésző konzol részében nincs hiba)**
  - _Nekem nem dobott hibát_


- **Firebase Hosting URL (létezik, és minden végpont megfelelő módon betöltődik)**
  - [Deployolt oldal](https://vasgergo-webkert.web.app)
  - [Itt vannak a végpontdefiníciók](src/app/app-routing.module.ts)


- **Adatmodell definiálása (legalább 4 TypeScript interfész vagy class formájában (ugyanennyi kollekció))**
  - [Itt vannak az adatmodelljeim](src/app/shared/models)
  - _Jelenleg csak 3 van_


- **Alkalmazás felbontása megfelelő számú komponensre (egyetlen komponens TS és HTML kódja sem haladja meg a 250 sort és soronként a 400 karaktert)**
  - _Szerintem rendesen fel van osztva de azért nézd meg_


- **Reszponzív, mobile-first felület (minden adat látható és jól jelenik meg böngészőben is, mobil nézetben is)**
   - _Igen_


- **Legalább 2 különböző attribútum direktíva használata**
   - _Itt vannak a használt attribútumdirektívák:_
     - [disabled 29.sor](src/app/pages/booking/booking.component.html)
     - [value 16.sor](src/app/pages/booking/booking.component.html)
     - _*Nem tüntettem fel az összes attribútum direktívát_


- **Legalább 2 különböző strukturális direktíva használata**
   - _Itt vannak a használt strukturálisdirektívák:_
     - [ngIf 8.sor](src/app/app.component.html)
     - [ngFor 16.sor](src/app/pages/booking/booking.component.html)
     - _*Nem tüntettem fel az összes strukturális direktívát_


- **Adatátadás szülő és gyermek komponensek között (legalább 1 @Input és 1 @Output)**

   - _TODO: NINCS MEGVALÓSÍTVA_


- **Legalább 10 különböző Material elem helyes használata.**
    - _Szerintem ezekben van 10 különböző_
      - [app.component](src/app/app.component.html)
      - [sign in](src/app/pages/signin/signin.component.html)
      - [sign up](src/app/pages/signup/signup.component.html)
      - [booking](src/app/pages/booking/booking.component.html)


- **Adatbevitel Angular form-ok segítségével megvalósítva (legalább 2)**
     - [sign in](src/app/pages/signin/signin.component.ts)
     - [sign up](src/app/pages/signup/signup.component.ts)
     - [booking](src/app/pages/booking/booking.component.ts)
  

- **Legalább 1 saját Pipe osztály írása és használata**
   - [custom-date.pipe.ts](src/app/shared/pipes/custom-date.pipe.ts)
   - [használata 74.sor](src/app/pages/booking/booking.component.ts)


- **Legalább 2 különböző Lifecycle Hook használata a teljes projektben (értelmes tartalommal, nem üresen)**
   - [ngOnInit 21.sor](src/app/pages/my-bookings/my-bookings.component.ts)
   - [ngOnDestroy 27.sor](src/app/pages/my-bookings/my-bookings.component.ts)



- **CRUD műveletek mindegyike megvalósult (Promise, Observable használattal)**
   - _TODO_


- **CRUD műveletek service-ekbe vannak kiszervezve és megfelelő módon injektálva lettek**
   - _Szerintem igen_


- **Firestore adatbázis használata az adatokhoz (integráció, környezeti változók használata helyes legyen)**
   - _Firestore adatbázist használtam az adatok tárolására, környezeti változókra nem volt szükségem_

  
- **Legalább 2 komplex Firestore lekérdezés megvalósítása (ide tartoznak: where feltétel, rendezés, léptetés, limitálás)**
   - [getBookingByDate 27.sor](src/app/shared/services/booking/booking.service.ts)
   - [getAllByUID 23.sor](src/app/shared/services/booking/booking.service.ts)


- **Legalább 4 különböző route a különböző oldalak eléréséhez**
   - _/home_
   - _/booking_
   - _/my-bookings_
   - _/signin_
   - _/signup_
   - [app-routing.module.ts](src/app/app-routing.module.ts)


- **Legalább 2 route levédése azonosítással (AuthGuard) (ahol ennek értelme van, pl.: egy fórum témakör megtekinthető bárki számára, de a regisztrált felhasználó adatai nem)**
   - _Két végpont van levédve_
     - _/booking_
     - _/my-bookings_
   - [app-routing.module.ts](src/app/app-routing.module.ts)
   - [auth.guard.ts](src/app/shared/services/guards/auth/auth.guard.ts)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

![alt text](/src/assets/logo.jpg)
