---
tags: det413-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.4.13 Verfügbarkeit des Hostsystems
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.4.13 - Verfügbarkeit des Hostsystems
Gruppe: [DET.4 Überwachung von Aktivitäten](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.4%20Überwachung%20von%20Aktivitäten.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)**<br> ***  &rarr; [Überwachung von Aktivitäten](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.4%20Überwachung%20von%20Aktivitäten.md) *** | Hostsysteme | SOLLTE | die Netzerreichbarkeit | anhand von {{Schwellwerten}} | überwachen | Detektions-Konzept | >Detektion für Hostsysteme SOLLTE die Netzerreichbarkeit anhand von {{ insert: param, det.4.13-prm1 }} überwachen.

> [!info]- Guidance
>Schwellwerte (engl. thresholds) sind hier Grenzwerte, die als Maßstab für die normale oder erwartete Netzerreichbarkeit des Hostsystems dienen. Diese Schwellwerte könnten beispielsweise eine bestimmte Anzahl an Fehlversuchen zur Erreichbarkeit in einem definierten Zeitfenster oder eine überdurchschnittlich hohe Anzahl an Verbindungsanfragen sein, die auf ungewöhnliche Netzwerkaktivität hindeuten. Ein Server könnte beispielsweise aufgrund eines Denial-of-Service-Angriffs (DoS) nicht mehr erreichbar sein, wodurch Dienste für Nutzende ausfallen. Ebenso könnte eine unerwartete Nichterreichbarkeit auf einen Hardwaredefekt, einen Konfigurationsfehler oder einen internen Angriff hindeuten, bei dem der Server vom Netz getrennt wurde, um Spuren zu verwischen. Die Überwachung anhand von Schwellwerten kann der Institution dabei helfen, solche Vorfälle frühzeitig zu erkennen und zu reagieren, bevor sie größeren Schaden anrichten. Die Überwachung kann über ein internes Monitoring-System umgesetzt werden, das kontinuierlich die Erreichbarkeit der Server mittels sogenannter Health-Checks oder Probes prüft. Dabei kann beispielsweise ein automatisches Ping-Verfahren eingesetzt werden, das in regelmäßigen Abständen die Antwortzeit des Servers misst. Die festgelegten Schwellwerte könnten zum Beispiel die maximal erlaubte Anzahl an aufeinanderfolgenden fehlgeschlagenen Ping-Antworten oder die durchschnittliche Antwortzeit sein.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | b186a9e9-cce6-4bb5-8e70-ac17499c71d8 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | b186a9e9-cce6-4bb5-8e70-ac17499c71d8 |
