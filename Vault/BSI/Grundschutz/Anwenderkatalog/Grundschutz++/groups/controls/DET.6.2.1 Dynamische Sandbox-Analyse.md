---
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.6.2.1 Dynamische Sandbox-Analyse
parent_control: DET.6.2 Beurteilung  von Eingängen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.6.2.1 - Dynamische Sandbox-Analyse
Gruppe: [DET.6 Vorfallserkennung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.6%20Vorfallserkennung.md)
---

** Übergeordnetes Control: ** [DET.6.2 Beurteilung  von Eingängen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.6.2%20Beurteilung%20von%20Eingängen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)**<br> ***  &rarr; [Vorfallserkennung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.6%20Vorfallserkennung.md) *** |  | KANN | verdächtige Dateien in einer isolierten Umgebung | mindestens anhand von aufgebauten Netzverbindungen, Systemaufrufen und Dateizugriffen | testen | Detektions-Konzept | >Detektion KANN verdächtige Dateien in einer isolierten Umgebung mindestens anhand von aufgebauten Netzverbindungen, Systemaufrufen und Dateizugriffen testen.

> [!info]- Guidance
>Eine dynamische Sandbox Analyse ist die Ausführung des verdächtigen Codes in einer isolierten Umgebung, aus der eine Anwendung nicht durch Ausführung von Systembefehlen ausbrechen kann (Sandbox Detonation). Sie ermöglicht die sichere Untersuchung potenziell schädlicher Dateien in einer isolierten Umgebung, um deren tatsächliches Verhalten zu beobachten. Eine dynamische Analyse kann verschiedene verdächtige Aktivitäten erfassen: Dateisystemoperationen wie das Erstellen, Ändern oder Löschen von Dateien; Registry-Modifikationen, besonders in Autostart-Bereichen; Netzwerkverhalten einschließlich externer Verbindungsversuche und Datenexfiltration; Prozessverhalten wie Injektionstechniken oder unerwartete Kindprozesse; Speichermanipulationen; Persistenzmechanismen wie Dienste oder geplante Aufgaben; Anti-Analyse-Techniken zur Erkennung virtueller Umgebungen; sowie ungewöhnliche API-Aufrufe wie kryptografische Funktionen oder Sicherheitsumgehungen. Die Sandbox kann dabei mit ausreichender Laufzeit, Netzwerksimulation und Snapshot-Funktionen ausgestattet werden, um auch verzögerte oder umgebungsspezifische Schadfunktionen zu erkennen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 5e302b5d-0a5b-4821-8d46-1e2f7fc40c3f |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 5e302b5d-0a5b-4821-8d46-1e2f7fc40c3f |
