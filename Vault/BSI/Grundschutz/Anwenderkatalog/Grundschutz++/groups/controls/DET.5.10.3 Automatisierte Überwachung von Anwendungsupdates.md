---
tags: det5103-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.5.10.3 Automatisierte Überwachung von Anwendungsupdates
parent_control: DET.5.10 Zeitnahes Patchmanagement
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.5.10.3 - Automatisierte Überwachung von Anwendungsupdates
Gruppe: [DET.5 Management von Schwachstellen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.5%20Management%20von%20Schwachstellen.md)
---

** Übergeordnetes Control: ** [DET.5.10 Zeitnahes Patchmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.5.10%20Zeitnahes%20Patchmanagement.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)**<br> ***  &rarr; [Management von Schwachstellen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.5%20Management%20von%20Schwachstellen.md) *** | Anwendungen | KANN | den Patchstatus | durch {{einen automatisierten Mechanismus}} | überwachen | Detektions-Konzept | >Detektion für Anwendungen KANN den Patchstatus durch {{ insert: param, det.5.10.3-prm1 }} überwachen.

> [!info]- Guidance
>Eine nicht gepatchte Anwendung könnte als Einfallstor für Angreifer dienen, die bekannte Schwachstellen ausnutzen, um sich Zugang zu Systemen oder Daten zu verschaffen. Die Umsetzung kann beispielsweise auf einem Patch Management System (PMS) oder einem Vulnerability Management System (VMS) basieren. Ein Patch-Managementsystem kann beispielsweise so konfiguriert werden, dass es kontinuierlich die Versionen der installierten Software mit einer zentralen Datenbank für verfügbare Updates abgleicht. Auch die Nutzung eines Schwachstellen-Scanners, der im Netzwerk nach ungepatchten Anwendungen sucht, ist eine wirksame Maßnahme. Ein solcher Scanner könnte beispielsweise wöchentlich oder sogar täglich einen Scan durchführen und die Ergebnisse in einem Dashboard visualisieren. Wichtige prozessuale Tipps sind die Einrichtung von Benachrichtigungsworkflows, die sicherstellen, dass kritische Patch-Status-Änderungen sofort an die richtigen Personen eskaliert werden, sowie die Integration der Überwachungsergebnisse in ein zentrales Incident Response System. Dies kann helfen, die Reaktionszeit zu verkürzen, sodass die Anwendungen schnellstmöglich aktualisiert werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 1aec3d83-b204-4999-88f5-abf1e140a925 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 1aec3d83-b204-4999-88f5-abf1e140a925 |

> [!info]- Links> > related: [TEST.1.1 Verfahren und Regelungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/TEST.1.1%20Verfahren%20und%20Regelungen.md)
