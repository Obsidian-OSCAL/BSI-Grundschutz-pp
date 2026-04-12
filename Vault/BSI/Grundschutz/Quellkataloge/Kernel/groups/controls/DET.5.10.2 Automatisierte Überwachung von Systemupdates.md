---
tags:
- det5102-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.5.10.2 Automatisierte Überwachung von Systemupdates
parent_control: DET.5.10 Zeitnahes Patchmanagement
stmt_target_object_category: IT-Systeme
stmt_modal_verb: SOLLTE
stmt_action_word: überwachen
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.5.10.2 - Automatisierte Überwachung von Systemupdates
Gruppe: [DET.5 Management von Schwachstellen](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.5%20Management%20von%20Schwachstellen.md)
---

** Übergeordnetes Control: ** [DET.5.10 Zeitnahes Patchmanagement](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.5.10%20Zeitnahes%20Patchmanagement.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)*<br> *  &rarr; [Management von Schwachstellen](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.5%20Management%20von%20Schwachstellen.md) *</div> | [Detektion](practices_Detektion_f479aa5a-6dd9-4b9b-973e-8c4f85b074ed) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | den Patchstatus | durch {{einen automatisierten Mechanismus}} | [überwachen](action_words_überwachen_43c9fe35-e725-48b1-85d2-29cdcc69ce63) | Detektions-Konzept | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Detektion für IT-Systeme SOLLTE den Patchstatus durch {{ insert: param, det.5.10.2-prm1 }} überwachen.</span>

> [!info]- Guidance
>Der Patchsstatus des Informationsverbundes kann dabei durch Kennzahlen bestimmt werden, z.B. durchschnittliche Zeit bis zum Patch (Mean Time To Patch), Prozentsatz aktuell gepatchter Assets, Anzahl offener/geschlossener Ausnahmen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | d652bc78-8f87-42ef-a52a-7bdd9a43212f |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | d652bc78-8f87-42ef-a52a-7bdd9a43212f |
