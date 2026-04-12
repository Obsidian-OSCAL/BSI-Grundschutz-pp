---
tags:
- det5103-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.5.10.3 Automatisierte Überwachung von Anwendungsupdates
parent_control: DET.5.10 Zeitnahes Patchmanagement
stmt_target_object_category: Anwendungen
stmt_modal_verb: KANN
stmt_action_word: überwachen
control_effort_level: '4'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.5.10.3 - Automatisierte Überwachung von Anwendungsupdates
Gruppe: [DET.5 Management von Schwachstellen](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.5%20Management%20von%20Schwachstellen.md)
---

** Übergeordnetes Control: ** [DET.5.10 Zeitnahes Patchmanagement](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.5.10%20Zeitnahes%20Patchmanagement.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)*<br> *  &rarr; [Management von Schwachstellen](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.5%20Management%20von%20Schwachstellen.md) *</div> | [Detektion](practices_Detektion_f479aa5a-6dd9-4b9b-973e-8c4f85b074ed) | [Anwendungen](target_object_categories_Anwendungen_7e41ecf5-1831-4691-ad0c-4fc7bbc1b871) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | den Patchstatus | durch {{einen automatisierten Mechanismus}} | [überwachen](action_words_überwachen_43c9fe35-e725-48b1-85d2-29cdcc69ce63) | Detektions-Konzept | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Detektion für Anwendungen KANN den Patchstatus durch {{ insert: param, det.5.10.3-prm1 }} überwachen.</span>

> [!info]- Guidance
>Eine nicht gepatchte Anwendung könnte als Einfallstor für Angreifer dienen, die bekannte Schwachstellen ausnutzen, um sich Zugang zu Systemen oder Daten zu verschaffen. Die Umsetzung kann beispielsweise auf einem Patch Management System (PMS) oder einem Vulnerability Management System (VMS) basieren. Ein Patch-Managementsystem kann beispielsweise so konfiguriert werden, dass es kontinuierlich die Versionen der installierten Software mit einer zentralen Datenbank für verfügbare Updates abgleicht. Auch die Nutzung eines Schwachstellen-Scanners, der im Netzwerk nach ungepatchten Anwendungen sucht, ist eine wirksame Maßnahme. Ein solcher Scanner könnte beispielsweise wöchentlich oder sogar täglich einen Scan durchführen und die Ergebnisse in einem Dashboard visualisieren. Wichtige prozessuale Tipps sind die Einrichtung von Benachrichtigungsworkflows, die sicherstellen, dass kritische Patch-Status-Änderungen sofort an die richtigen Personen eskaliert werden, sowie die Integration der Überwachungsergebnisse in ein zentrales Incident Response System. Dies kann helfen, die Reaktionszeit zu verkürzen, sodass die Anwendungen schnellstmöglich aktualisiert werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 1aec3d83-b204-4999-88f5-abf1e140a925 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 1aec3d83-b204-4999-88f5-abf1e140a925 |

> [!info]- Links> > related: [TEST.1.1 Verfahren und Regelungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/TEST.1.1%20Verfahren%20und%20Regelungen.md)
