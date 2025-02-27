import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharactersModule } from './modules/characters/characters.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // 🔥 Importa las rutas
import { GraphQLModule } from './core/graphql/graphql.module';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FavoritesModule } from './modules/favorites/favorites.module';
import { HeaderModule } from './shared/components/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,BrowserAnimationsModule, HttpClientModule,HeaderModule , CharactersModule, FavoritesModule, GraphQLModule, FormsModule,  RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ],
})
export class AppModule {}
