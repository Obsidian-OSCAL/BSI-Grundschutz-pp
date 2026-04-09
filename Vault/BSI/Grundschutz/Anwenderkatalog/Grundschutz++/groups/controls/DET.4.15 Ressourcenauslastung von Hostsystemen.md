---
tags: det415-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.4.15 Ressourcenauslastung von Hostsystemen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.4.15 - Ressourcenauslastung von Hostsystemen
Gruppe: [DET.4 Überwachung von Aktivitäten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.4%20Überwachung%20von%20Aktivitäten.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)**<br> ***  &rarr; [Überwachung von Aktivitäten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.4%20Überwachung%20von%20Aktivitäten.md) *** | Hostsysteme | SOLLTE | die Ressourcenauslastung | anhand von {{Schwellwerten}} | überwachen | Detektions-Konzept | >Detektion für Hostsysteme SOLLTE die Ressourcenauslastung anhand von {{ insert: param, det.4.15-prm1 }} überwachen.

> [!info]- Guidance
>Hierzu zählt z.B. die Auslastung der CPU, des Arbeitsspeichers, des Festspeichers.   Dazu ist es sinnvoll vorab Schwellwerte zu ermitteln (KPI Baselining). Mögliche Reaktionsmaßnahmen bei zu hoher Auslastung sind z.B. die Lastverteilung auf mehrere Host-Rechner oder die Beschränkung der Ressourcennutzung pro Client.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 7cfa26e7-7fe5-4a6a-999b-489c9785821e |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 7cfa26e7-7fe5-4a6a-999b-489c9785821e |
