---
tags: det416-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.4.16 Ressourcenauslastung der Server-Dienste
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.4.16 - Ressourcenauslastung der Server-Dienste
Gruppe: [DET.4 Überwachung von Aktivitäten](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.4%20Überwachung%20von%20Aktivitäten.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)**<br> ***  &rarr; [Überwachung von Aktivitäten](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.4%20Überwachung%20von%20Aktivitäten.md) *** | Anwendungen | KANN | die Ressourcenauslastung der für die Anwendung verwendeten Server-Dienste | anhand von {{Schwellwerten}} | überwachen | Detektions-Konzept | >Detektion für Anwendungen KANN die Ressourcenauslastung der für die Anwendung verwendeten Server-Dienste anhand von {{ insert: param, det.4.16-prm1 }} überwachen.

> [!info]- Guidance
>Hierzu zählt z.B. die Auslastung der CPU, des Arbeitsspeichers, des Festspeichers und Anzahl der verbundenen Clients. Dazu ist es sinnvoll vorab Schwellwerte zu ermitteln (KPI Baselining). Mögliche Reaktionsmaßnahmen bei zu hoher Auslastung sind z.B. die Lastverteilung auf mehrere Host-Rechner oder die Beschränkung der Ressourcennutzung pro Client.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | f094dca7-3bfb-477b-8a50-da1587033e4d |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | f094dca7-3bfb-477b-8a50-da1587033e4d |
