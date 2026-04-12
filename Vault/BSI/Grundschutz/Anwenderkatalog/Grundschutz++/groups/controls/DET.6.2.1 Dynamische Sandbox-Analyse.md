---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.6.2.1 Dynamische Sandbox-Analyse
parent_control: DET.6.2 Beurteilung  von Eingängen
stmt_modal_verb: KANN
stmt_action_word: testen
control_effort_level: '4'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.6.2.1 - Dynamische Sandbox-Analyse
Gruppe: [DET.6 Vorfallserkennung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.6%20Vorfallserkennung.md)
---

** Übergeordnetes Control: ** [DET.6.2 Beurteilung  von Eingängen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.6.2%20Beurteilung%20von%20Eingängen.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)*<br> *  &rarr; [Vorfallserkennung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.6%20Vorfallserkennung.md) *</div> | [Detektion](practices_Detektion_f479aa5a-6dd9-4b9b-973e-8c4f85b074ed) |  | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | verdächtige Dateien in einer isolierten Umgebung | mindestens anhand von aufgebauten Netzverbindungen, Systemaufrufen und Dateizugriffen | [testen](action_words_testen_db5f9334-97d0-4326-80f0-176348a3f165) | Detektions-Konzept | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Detektion KANN verdächtige Dateien in einer isolierten Umgebung mindestens anhand von aufgebauten Netzverbindungen, Systemaufrufen und Dateizugriffen testen.</span>

> [!info]- Guidance
>Eine dynamische Sandbox Analyse ist die Ausführung des verdächtigen Codes in einer isolierten Umgebung, aus der eine Anwendung nicht durch Ausführung von Systembefehlen ausbrechen kann (Sandbox Detonation). Sie ermöglicht die sichere Untersuchung potenziell schädlicher Dateien in einer isolierten Umgebung, um deren tatsächliches Verhalten zu beobachten. Eine dynamische Analyse kann verschiedene verdächtige Aktivitäten erfassen: Dateisystemoperationen wie das Erstellen, Ändern oder Löschen von Dateien; Registry-Modifikationen, besonders in Autostart-Bereichen; Netzwerkverhalten einschließlich externer Verbindungsversuche und Datenexfiltration; Prozessverhalten wie Injektionstechniken oder unerwartete Kindprozesse; Speichermanipulationen; Persistenzmechanismen wie Dienste oder geplante Aufgaben; Anti-Analyse-Techniken zur Erkennung virtueller Umgebungen; sowie ungewöhnliche API-Aufrufe wie kryptografische Funktionen oder Sicherheitsumgehungen. Die Sandbox kann dabei mit ausreichender Laufzeit, Netzwerksimulation und Snapshot-Funktionen ausgestattet werden, um auch verzögerte oder umgebungsspezifische Schadfunktionen zu erkennen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 5e302b5d-0a5b-4821-8d46-1e2f7fc40c3f |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 5e302b5d-0a5b-4821-8d46-1e2f7fc40c3f |
