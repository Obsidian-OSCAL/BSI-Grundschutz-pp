---
tags:
- living_off_the_land
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.3.1.2 Ausgeführte Kommandozeilenbefehle
parent_control: DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse
stmt_target_object_category: IT-Systeme
stmt_modal_verb: SOLLTE
stmt_action_word: protokollieren
stmt_documentation: Audit Log
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.3.1.2 - Ausgeführte Kommandozeilenbefehle
Tag: [[tags_Living off the land|Living off the land]]
Gruppe: [DET.3 Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md)
---

** Übergeordnetes Control: ** [DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.3.1%20Protokollierung%20sicherheitsrelevanter%20Ereignisse.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)*<br> *  &rarr; [Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md) *</div> | [Detektion](practices_Detektion_f479aa5a-6dd9-4b9b-973e-8c4f85b074ed) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | ausgeführte Kommandozeilenbefehle |  | [protokollieren](action_words_protokollieren_fe0c8466-8c0d-450b-a649-02c11e0231f8) | [Audit Log](documentation_guidelines_Audit Log) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Detektion für IT-Systeme SOLLTE ausgeführte Kommandozeilenbefehle protokollieren.</span>

> [!info]- Guidance
>Angreifer nutzen Kommandozeilenfunktionen wie Bash oder Windows PowerShell, um mit Bordmitteln schädliche Befehle auszuführen. Hier sind vor allem Living-off-the-Land-Binaries (LOLBins) und Nutzlasten (Malware Payloads) zu nennen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | cd3be1eb-6b18-4e69-98c5-a584e7daa9f2 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | cd3be1eb-6b18-4e69-98c5-a584e7daa9f2 |
