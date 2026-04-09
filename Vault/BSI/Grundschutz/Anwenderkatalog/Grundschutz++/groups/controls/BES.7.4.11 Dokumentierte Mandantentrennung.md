---
tags: Lieferketten
class: BSI-Stand-der-Technik-Kernel
type: control
control: BES.7.4.11 Dokumentierte Mandantentrennung
parent_control: BES.7.4 Vollständigkeit der Unterlagen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BES.7.4.11 - Dokumentierte Mandantentrennung
Tags: "[Lieferketten](tags_Lieferketten)"
Gruppe: [BES.7 Abnahme](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BES.7%20Abnahme.md)
---

** Übergeordnetes Control: ** [BES.7.4 Vollständigkeit der Unterlagen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/BES.7.4%20Vollständigkeit%20der%20Unterlagen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Beschaffungsmanagement (BES)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BES%20Beschaffungsmanagement.md)**<br> ***  &rarr; [Abnahme](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BES.7%20Abnahme.md) *** | Outsourcing | KANN | die beim Dienstleister implementierten Maßnahmen zur Mandantentrennung | nach Vertragsschluss | dokumentieren | Betriebshandbuch | >Beschaffungsmanagement für Outsourcing KANN die beim Dienstleister implementierten Maßnahmen zur Mandantentrennung nach Vertragsschluss dokumentieren.

> [!info]- Guidance
>Die Dokumentation der beim Dienstleister implementierten Maßnahmen zur Mandantentrennung trägt dazu bei, die Risiken unzureichender Abgrenzung zwischen verschiedenen Kundeninstanzen transparent zu bewerten und im Bedarfsfall nachzuweisen. Ohne eine solche Transparenz könnte es zu Datenabflüssen oder unbefugtem Zugriff durch andere Mandanten kommen, etwa wenn virtuelle Maschinen auf derselben Hardware betrieben werden und Schwachstellen in der Virtualisierung ausgenutzt werden könnten. Eine dokumentierte Trennungskontrolle kann nachweisen, dass Speicher, Rechenleistung oder Netzwerksegmente isoliert sind und dadurch die Vertraulichkeit und Integrität der eigenen Daten erhalten bleibt. Im Kontext bedeutet Mandantentrennung die technische und/oder organisatorische Gewährleistung, dass Daten, Prozesse und Ressourcen verschiedener Kunden innerhalb einer geteilten Infrastruktur so voneinander abgegrenzt sind, dass unbeabsichtigte oder absichtliche Zugriffe ausgeschlossen werden können. Damit ist nicht nur die physische, sondern auch die logische Separation gemeint. Die Umsetzung kann sinnvoll erfolgen, indem eine Institution nach Vertragsschluss gezielt vom Dienstleister beschriebene Schutzmechanismen abfragt und dokumentiert, beispielsweise Isolierungsverfahren auf Hypervisor-Ebene, Verschlüsselung pro Mandant oder die Vergabe getrennter Schlüsselmaterialien. Praktisch kann es hilfreich sein, in Service-Reports nachvollziehbare Testnachweise zu verlangen, etwa Ergebnisse von Penetrationstests, die speziell auf Mandantengrenzen zielen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | d59ad53c-00d4-4bfd-8af9-bf09722731c5 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | d59ad53c-00d4-4bfd-8af9-bf09722731c5 |

> [!info]- Links> > related: [BES.4.5.2 Mandantentrennung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/BES.4.5.2%20Mandantentrennung.md)
