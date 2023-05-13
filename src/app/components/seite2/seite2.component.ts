import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-seite2',
  templateUrl: './seite2.component.html',
  styleUrls: ['./seite2.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class Seite2Component {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Name', 'Autor', 'Jahr', 'position'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: PeriodicElement | null;

}
export interface PeriodicElement {
  Name: string;
  position: number;
  Autor: string;
  Jahr: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    Name: 'Die Bibel',
    Autor: 'Verschiden Autoren',
    Jahr: '400 a.C. - 100 d.C',
    description: `Die Bibel ist das heilige Buch der Christen und besteht aus dem Alten und dem Neuen Testament.
                Es ist das meistgelesene und bekannteste Buch der Welt und enthält Geschichten,
                Prophezeiungen, Gebete und Weisheiten.`,
  },
  {
    position: 2,
    Name: 'Der Pilgerreise',
    Autor: 'John Bunyan',
    Jahr: '1678',
    description: `"Der Pilgerreise" ist eine allegorische Erzählung über die Reise eines Mannes namens Christian, der auf der Suche nach der Erlösung seines Lebens ist. Es ist eines der bekanntesten und einflussreichsten Werke der christlichen Literatur und wird oft als ein Klassiker der Weltliteratur betrachtet.`,
  },
  {
    position: 3,
    Name: 'Nachfolge',
    Autor: 'Dietrich Bonhoeffer',
    Jahr: '1937',
    description: `"Nachfolge" ist ein Klassiker der christlichen Literatur und ein Meisterwerk der Theologie. Es ist ein Aufruf zur radikalen Nachfolge Jesu Christi und stellt eine Herausforderung für jeden Christen dar, sein Leben in Übereinstimmung mit dem Willen Gottes zu leben.`,
  },
  {
    position: 4,
    Name: 'Der Fall Jesus',
    Autor: 'Lee Strobel',
    Jahr: '1998',
    description: `Der Autor Lee Strobel geht in diesem Buch den Fragen nach, ob Jesus tatsächlich der Sohn Gottes war, ob es historische Beweise für seine Existenz gibt und ob die Bibel als vertrauenswürdiges historisches Dokument betrachtet werden kann. Das Buch gibt Antworten auf skeptische Fragen und Zweifel und ist eine großartige Ressource für Christen und Nicht-Christen, die nach Antworten suchen.`,
  },
  {
    position: 5,
    Name: 'Der Graf von Monte Christo',
    Autor: 'Alexandre Dumas',
    Jahr: '1846 ',
    description: `Edmond Dantès, ein junger Matrose, wird fälschlicherweise wegen Hochverrats verhaftet und im Château d'If inhaftiert. Nach 14 Jahren gelingt ihm die Flucht und er findet einen Schatz, der ihm ermöglicht, als der reiche Graf von Monte Christo zurückzukehren. Er nutzt seine neue Identität, um Rache an denjenigen zu nehmen, die ihn damals hintergangen haben. Doch am Ende erkennt er, dass Rache nicht das Wichtigste ist und kehrt zu seiner ursprünglichen Identität zurück.s`,
  },
  {
    position: 6,
    Name: 'Die Chroniken von Narnia',
    Autor: 'C. S. Lewis',
    Jahr: '1950-1956',
    description: `In "Die Chroniken von Narnia" betreten vier Kinder eine Fantasiewelt, Narnia genannt. Sie helfen, die rechtmäßige Herrscherin wieder auf den Thron zu bringen und kämpfen gegen den bösen Weißen Hexe. Die Abenteuer reichen von Rittern und Königen bis hin zu sprechenden Tieren und Magie. Die Kinder wachsen und lernen in ihrer Zeit in Narnia und kehren schließlich in ihre eigene Welt zurück.`,
  },
  {
    position: 7,
    Name: 'Nitrogen',
    Autor: '14.0067',
    Jahr: 'N',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
  },
  {
    position: 8,
    Name: 'Oxygen',
    Autor: '15.9994',
    Jahr: 'O',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`,
  },

];

