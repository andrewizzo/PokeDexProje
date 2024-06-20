import { Directive, OnInit } from "@angular/core";

@Directive({
    selector: '[typeDirective]'
})
export class TypeDirective implements OnInit {
    variabileProva:any;

    ngOnInit(): void {

    }


    applicaTema() {
        switch (this.variabileProva) {
            case 'normal':
                return '#a8a878';
                break;
            case 'fire':
                return '#f08030';
                break;
            case 'psychic':
                return '#f85888';
                break;
            case 'water':
                return '#6890f0';
                break;
            case 'grass':
                return '#78c850';
                break;
            case 'fighting':
                return '#c03028';
                break;
            case 'bug':
                return '#a8b820';
                break;
            case 'electric':
                return '#f8d030';
                break;
            case 'poison':
                return '#a040a0';
                break;
            case 'ground':
                return '#e0c068';
                break;
            case 'fairy':
                return '#f0b6bc';
                break;
            case 'rock':
                return '#b8a038';
                break;
            case 'ghost':
                return '#705898';
                break;
            case 'flying':
                return '#93c2f0';
                break;
            case 'steel':
                return '#60a1b8';
                break;
            case 'ice':
                return '#3fd8ff';
                break;
            case 'dragon':
                return '#5060e1';
                break;
            case 'dark':
                return '#4b3d3b';
                break;
            default:
                return '#000000'
                break;
        }
    }
}