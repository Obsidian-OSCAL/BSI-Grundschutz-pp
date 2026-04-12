---
tags:
- det4121-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.4.12.1 Auslastung des Netzes
parent_control: DET.4.12 Monitoring der Netzverfügbarkeit
stmt_target_object_category: Netze
stmt_modal_verb: KANN
stmt_action_word: überwachen
control_effort_level: '4'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.4.12.1 - Auslastung des Netzes
Gruppe: [DET.4 Überwachung von Aktivitäten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.4%20Überwachung%20von%20Aktivitäten.md)
---

** Übergeordnetes Control: ** [DET.4.12 Monitoring der Netzverfügbarkeit](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.4.12%20Monitoring%20der%20Netzverfügbarkeit.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)*<br> *  &rarr; [Überwachung von Aktivitäten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.4%20Überwachung%20von%20Aktivitäten.md) *</div> | [Detektion](practices_Detektion_f479aa5a-6dd9-4b9b-973e-8c4f85b074ed) | [Netze](target_object_categories_Netze_1a4fb57d-1648-4111-979d-6a5f4f848620) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | die Auslastung des Netzes | anhand von {{Schwellwerten}} | [überwachen](action_words_überwachen_43c9fe35-e725-48b1-85d2-29cdcc69ce63) | Detektions-Konzept | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Detektion für Netze KANN die Auslastung des Netzes anhand von {{ insert: param, det.4.12.1-prm1 }} überwachen.</span>

> [!info]- Guidance
>Die Überwachung der Netzauslastung ermöglicht eine schnelle Reaktion bei Verfügbarkeitsproblemen. Wichtige Indikatoren sind Auslastung der verfügbaren Bandbreite, Netzlatenz und Packverluste. Unerwartet hoher Datenverkehr kann auch ein Indiz für einen unautorisierten Zugriff auf große Datenmengen sein. Zur Umsetzung ist es zweckmäßig zunächst Normwerte zu ermitteln (Baselining).

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | c17dd877-0922-4ca8-a38b-1d2f9ae04f0d |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | c17dd877-0922-4ca8-a38b-1d2f9ae04f0d |
