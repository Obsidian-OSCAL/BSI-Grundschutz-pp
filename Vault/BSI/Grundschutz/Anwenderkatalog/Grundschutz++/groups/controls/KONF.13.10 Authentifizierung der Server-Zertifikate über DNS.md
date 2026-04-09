---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.13.10 Authentifizierung der Server-Zertifikate über DNS
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.13.10 - Authentifizierung der Server-Zertifikate über DNS
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.13 Senden und Empfangen von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Senden und Empfangen von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md) *** | E-Mail | SOLLTE | die Authentifizierung der Server-Zertifikate über das DNS |  | aktivieren | Konfigurationshistorie | >Konfiguration für E-Mail SOLLTE die Authentifizierung der Server-Zertifikate über das DNS aktivieren.

> [!info]- Guidance
>Die Authentifizierung der Server-Zertifikate über das DNS (Domain Name System) kann die Sicherheit der E-Mail-Kommunikation erheblich steigern. Dabei werden Zertifikatsinformationen in DNS-Einträgen genutzt, um die Echtheit der TLS/SSL-Zertifikate eines E-Mail-Servers zu überprüfen und sicherzustellen, dass man tatsächlich mit dem beabsichtigten Kommunikationspartner spricht. Techniken wie DANE (DNS-based Authentication of Named Entities) oder CAA (Certificate Authority Authorization) nutzen spezifische DNS-Resource Records (wie TLSA oder CAA Records), um entweder die verwendeten Zertifikate oder die autorisierten Zertifizierungsstellen im DNS zu hinterlegen. Dies kann verhindern, dass ein Angreifer eine gefälschte Identität vortäuschen oder eine Man-in-the-Middle-Attacke durchführen könnte, indem er ein nicht autorisiertes oder kompromittiertes Zertifikat präsentiert. Ohne diese zusätzliche Überprüfung könnte ein Angreifer beispielsweise den E-Mail-Verkehr der Institution abfangen und mitlesen, während er sich als der legitime Server ausgibt. Die Aktivierung dieser DNS-basierten Überprüfung kann also die Vertraulichkeit und Integrität der übertragenen E-Mails schützen. Zur Umsetzung werden Informationen über eigene Serverzertifikate im DNS hinterlegt und die Prüfung eingehender E-Mails auf hinterlegte Einträge der sendenden Servers aktiviert.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | ee341e2a-290d-4d5f-bf24-c95a265395f6 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | ee341e2a-290d-4d5f-bf24-c95a265395f6 |
