---
tags:
- det416-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.4.16 Ressourcenauslastung der Server-Dienste
stmt_target_object_category: Anwendungen
stmt_modal_verb: KANN
stmt_action_word: überwachen
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.4.16 - Ressourcenauslastung der Server-Dienste
Gruppe: [DET.4 Überwachung von Aktivitäten](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.4%20Überwachung%20von%20Aktivitäten.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)*<br> *  &rarr; [Überwachung von Aktivitäten](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.4%20Überwachung%20von%20Aktivitäten.md) *</div> | [Detektion](practices_Detektion_f479aa5a-6dd9-4b9b-973e-8c4f85b074ed) | [Anwendungen](target_object_categories_Anwendungen_7e41ecf5-1831-4691-ad0c-4fc7bbc1b871) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | die Ressourcenauslastung der für die Anwendung verwendeten Server-Dienste | anhand von {{Schwellwerten}} | [überwachen](action_words_überwachen_43c9fe35-e725-48b1-85d2-29cdcc69ce63) | Detektions-Konzept | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Detektion für Anwendungen KANN die Ressourcenauslastung der für die Anwendung verwendeten Server-Dienste anhand von {{ insert: param, det.4.16-prm1 }} überwachen.</span>

> [!info]- Guidance
>Hierzu zählt z.B. die Auslastung der CPU, des Arbeitsspeichers, des Festspeichers und Anzahl der verbundenen Clients. Dazu ist es sinnvoll vorab Schwellwerte zu ermitteln (KPI Baselining). Mögliche Reaktionsmaßnahmen bei zu hoher Auslastung sind z.B. die Lastverteilung auf mehrere Host-Rechner oder die Beschränkung der Ressourcennutzung pro Client.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | f094dca7-3bfb-477b-8a50-da1587033e4d |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | f094dca7-3bfb-477b-8a50-da1587033e4d |
