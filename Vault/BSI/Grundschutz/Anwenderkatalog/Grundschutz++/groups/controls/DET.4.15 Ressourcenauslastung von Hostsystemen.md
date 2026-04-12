---
tags:
- det415-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.4.15 Ressourcenauslastung von Hostsystemen
stmt_target_object_category: Hostsysteme
stmt_modal_verb: SOLLTE
stmt_action_word: überwachen
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.4.15 - Ressourcenauslastung von Hostsystemen
Gruppe: [DET.4 Überwachung von Aktivitäten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.4%20Überwachung%20von%20Aktivitäten.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)*<br> *  &rarr; [Überwachung von Aktivitäten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.4%20Überwachung%20von%20Aktivitäten.md) *</div> | [Detektion](practices_Detektion_f479aa5a-6dd9-4b9b-973e-8c4f85b074ed) | [Hostsysteme](target_object_categories_Hostsysteme_19c946fc-e991-44ee-87c5-7bbe5d5aaf55) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die Ressourcenauslastung | anhand von {{Schwellwerten}} | [überwachen](action_words_überwachen_43c9fe35-e725-48b1-85d2-29cdcc69ce63) | Detektions-Konzept | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Detektion für Hostsysteme SOLLTE die Ressourcenauslastung anhand von {{ insert: param, det.4.15-prm1 }} überwachen.</span>

> [!info]- Guidance
>Hierzu zählt z.B. die Auslastung der CPU, des Arbeitsspeichers, des Festspeichers.   Dazu ist es sinnvoll vorab Schwellwerte zu ermitteln (KPI Baselining). Mögliche Reaktionsmaßnahmen bei zu hoher Auslastung sind z.B. die Lastverteilung auf mehrere Host-Rechner oder die Beschränkung der Ressourcennutzung pro Client.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 7cfa26e7-7fe5-4a6a-999b-489c9785821e |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 7cfa26e7-7fe5-4a6a-999b-489c9785821e |
