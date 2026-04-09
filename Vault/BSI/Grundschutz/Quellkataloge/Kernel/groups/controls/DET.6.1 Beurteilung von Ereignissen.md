---
tags: det61-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.6.1 Beurteilung von Ereignissen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.6.1 - Beurteilung von Ereignissen
Gruppe: [DET.6 Vorfallserkennung](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.6%20Vorfallserkennung.md)
---

> [!info]- Untergeordnete Controls
> [DET.6.1.1 Automatisierte Feststellung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.6.1.1%20Automatisierte%20Feststellung.md)> [DET.6.1.2 Automatische Alarmierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.6.1.2%20Automatische%20Alarmierung.md)> [DET.6.1.3 Dokumentation von Ergebnissen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.6.1.3%20Dokumentation%20von%20Ergebnissen.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)**<br> ***  &rarr; [Vorfallserkennung](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.6%20Vorfallserkennung.md) *** |  | SOLLTE | ein Verfahren zur Beurteilung von sicherheitsrelevanten Ereignissen | anhand von {{Kriterien}} | verankern | Detektions-Konzept | >Detektion SOLLTE ein Verfahren zur Beurteilung von sicherheitsrelevanten Ereignissen anhand von {{ insert: param, det.6.1-prm1 }} verankern.

> [!info]- Guidance
>Aus einer größeren Menge von sicherheitsrelevanten Ereignissen kann durch Filterung und Korrelation eine kleinere Menge sicherheitskritischer Ereignisse destilliert werden. Dies bedeutet, dass aus allen möglichen Sicherheitsereignissen (wie Zugriffsversuche, Systemänderungen, Netzwerkverkehr) besonders auf die potenziell gefährlicheren oder wichtigeren Ereignisse geachtet wird. Für die Definition eines sicherheitskritischen Ereignisses, siehe Glossar (Namensräume des Grundschutz++). Die Filterung erfolgt sinnvollerweise automatisiert, z.B. durch SIEM, EDR. Die Überwachung kann anhand von bestimmten Begriffen (z.B. "login from unknown device", "blocked malware", "permission changed") oder durch Anomalieerkennung erfolgen. Aufgrund der Vielzahl an möglichen Ereignissen sind detaillierte Kriterien nur schwer festzulegen. Die Kriterien können sich daher auch an einem überschaubaren Schema, etwa einer Abschätzung der Auswirkungen auf die Geschäftsprozesse und gesetzlichen Meldepflichten, orientieren. Sobald ein solches kritisches Ereignis erkannt wird, erfolgt eine Bewertung durch definierte Personen oder Rollen. Diese entscheiden, ob das Ereignis tatsächlich als Sicherheitsvorfall eingestuft werden kann.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | a8c7d445-54b4-40e2-aab5-b46e30549ec5 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | a8c7d445-54b4-40e2-aab5-b46e30549ec5 |
