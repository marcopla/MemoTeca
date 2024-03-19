import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Minha propriedade é decorada com o @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2',
    },
    {
      conteudo:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum impedit maxime officia perspiciatis consectetur nulla ea quas voluptatum perferendis, debitis architecto quisquam mollitia voluptatem natus corrupti cupiditate laboriosam labore?debitis architecto quisquam mollitia voluptatem natus corrupti cupiditate laboriosam labore?',
      autoria: '',
      modelo: 'modelo1',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
